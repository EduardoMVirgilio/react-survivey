import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAssignments = async (req, res) => {
    const assignments = await prisma.assignment.findMany(
        {
            include: {
                survey: true,
                user: true 
            },
        }
    );
    res.json(assignments);
};

export const getAssignment = async (req, res) => {
    const assignment = await prisma.assignment.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
        include: {
            survey: true,
            user: true 
        },
    });
    res.json(assignment);
};

export const createAssignment = async (req, res) => {
    const assignment = await prisma.assignment.create({
        data: req.body,
    });
    res.json(assignment);
};

export const updateAssignment = async (req, res) => {
    const assignment = await prisma.assignment.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: req.body,
    });
    res.json(assignment);
};

export const deleteAssignment = async (req, res) => {
    const assignment = await prisma.assignment.delete({
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.json(assignment);
};