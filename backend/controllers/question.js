import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getQuestions = async (req, res) => {
    const questions = await prisma.question.findMany(
        {
            include: {
                survey: true,
                responses: true
            },
        }
    );
    res.json(questions);
};

export const getQuestion = async (req, res) => {
    const question = await prisma.question.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
        include: {
            survey: true,
            responses: true
        },
    });
    res.json(question);
};

export const createQuestion = async (req, res) => {
    const question = await prisma.question.create({
        data: req.body,
    });
    res.json(question);
};

export const updateQuestion = async (req, res) => {
    const question = await prisma.question.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: req.body,
    });
    res.json(question);
};

export const deleteQuestion = async (req, res) => {
    const question = await prisma.question.delete({ 
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.json(question);
};