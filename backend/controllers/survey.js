import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getSurveys = async (req, res) => {
    const surveys = await prisma.survey.findMany(
        {
            include: {
                owner: true,
                questions: true,
                responses: true,
                assignments: true
            },
        }
    );
    res.json(surveys);
};

export const getSurvey = async (req, res) => {
    const survey = await prisma.survey.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
        include: {
            owner: true,
            questions: true,
            responses: true,
            assignments: true
        },
    });
    res.json(survey);
};

export const createSurvey = async (req, res) => {
    const survey = await prisma.survey.create({
        data: req.body,
    });
    res.json(survey);
};

export const updateSurvey = async (req, res) => {
    const survey = await prisma.survey.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: req.body,
    });
    res.json(survey);
};

export const deleteSurvey = async (req, res) => {
    const survey = await prisma.survey.delete({
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.json(survey);
};