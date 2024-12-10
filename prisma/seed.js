import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2';
const prisma = new PrismaClient();

async function main() {

    // Remove all existing data 
    await prisma.response.deleteMany();
    await prisma.question.deleteMany();
    await prisma.assignment.deleteMany();
    await prisma.survey.deleteMany();
    await prisma.user.deleteMany();

    // Reset all IDs
    await prisma.$executeRaw`UPDATE sqlite_sequence SET seq = 0 WHERE name IN ('User', 'Survey', 'Question', 'Response', 'Assignment')`;

  // Seed Users
  console.log('Adding users...');
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: await argon.hash('reverbAdmin2024!'),
      isAdmin: true,
    },
  });

  const employees = await prisma.user.createMany({
    data: [
      { name: 'Alice Johnson', email: 'alice@example.com', isAdmin: false,password: await argon.hash('reverbAlice2024!') },
      { name: 'Bob Smith', email: 'bob@example.com', isAdmin: false ,password: await argon.hash('reverbBob2024!') },
      { name: 'Charlie Brown', email: 'charlie@example.com', isAdmin: false ,password: await argon.hash('reverbCharlie2024!') },
    ],
  });

  // Seed Surveys
  console.log('Adding surveys...');
  const survey1 = await prisma.survey.create({
    data: {
      title: 'Employee Satisfaction Survey',
      description: 'A survey to measure employee satisfaction.',
      ownerId: admin.id,
      startDate: new Date(),
      state: 'PUBLISHED',
    },
  });

  const survey2 = await prisma.survey.create({
    data: {
      title: 'Tech Skills Assessment',
      description: 'Evaluate technical skills of employees.',
      ownerId: admin.id,
      startDate: new Date(),
      state: 'DRAFT',
    },
  });

  // Seed Assignments
  console.log('Adding assignments...');
  await prisma.assignment.createMany({
    data: [
      { userId: 1, surveyId: survey1.id },
      { userId: 2, surveyId: survey1.id },
      { userId: 3, surveyId: survey1.id },
      { userId: 2, surveyId: survey2.id },
      { userId: 2, surveyId: survey2.id },
    ],
  });

  // Seed Questions for Survey 1
  console.log('Adding questions...');
  await prisma.question.createMany({
    data: [
      {
        surveyId: survey1.id,
        text: 'How satisfied are you with your current role?',
        questionType: 'SINGLE_CHOICE',
        options: JSON.stringify(['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied']),
      },
      {
        surveyId: survey1.id,
        text: 'What do you like most about working here?',
        questionType: 'TEXT',
      },
      {
        surveyId: survey1.id,
        text: 'Rate your work-life balance.',
        questionType: 'SINGLE_CHOICE',
        options: JSON.stringify(['Excellent', 'Good', 'Average', 'Poor']),
      },
    ],
  });

  // Seed Questions for Survey 2
  await prisma.question.createMany({
    data: [
      {
        surveyId: survey2.id,
        text: 'Rate your proficiency in JavaScript.',
        questionType: 'SINGLE_CHOICE',
        options: JSON.stringify(['Beginner', 'Intermediate', 'Advanced', 'Expert']),
      },
      {
        surveyId: survey2.id,
        text: 'What programming languages do you use most often?',
        questionType: 'TEXT',
      },
      {
        surveyId: survey2.id,
        text: 'Select your favorite tools.',
        questionType: 'MULTIPLE_CHOICE',
        options: JSON.stringify([ 'React', 'Angular', 'Vue', 'Svelte','Astro' ]),
      },
    ],
  });

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
