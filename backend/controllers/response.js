import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getResponses = async (req, res) => {
    const responses = await prisma.response.findMany(
        {
            include: {
                survey: true,
                user: true,
                question: true
            },
        }
    );
    res.json(responses);
};

export const getResponse = async (req, res) => {
    const response = await prisma.response.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
        include: {
            survey: true,
            user: true,
            question: true
        },
    });
    res.json(response);
};

export const createResponse = async (req, res) => {
    const response = await prisma.response.create({
        data: req.body,
    });
    res.json(response);
};

export const updateResponse = async (req, res) => {
    const response = await prisma.response.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: req.body,
    });
    res.json(response);
};

export const deleteResponse = async (req, res) => {
    const response = await prisma.response.delete({
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.json(response);
};