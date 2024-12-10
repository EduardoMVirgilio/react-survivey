import * as argon from "argon2";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const register = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: await argon.hash(req.body.password),
            isAdmin: req.body.isAdmin,
        },
    });
    res.json(user);
};

export const getUsers = async (req, res) => {
    const query = {};
    if(req.query.email){
        query.email = {equals: req.query.email};
    }
    const users = await prisma.user.findMany({where: query});
    res.json(users);
};

export const getUser = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.json(user);
};

export const updateUser = async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: req.body,
    });
    res.json(user);
};

export const deleteUser = async (req, res) => {
    const user = await prisma.user.delete({
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.json(user);
};

export const login = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email,
        },
    });
    if (user) {
        const passwordMatch = await argon.verify(user.password, req.body.password);
        if (passwordMatch) {
            res.json(user);
        } else {
            res.status(401).json({ message: "Invalid password" });
        }
    } else {
        res.status(404).json({ message: "User not found" });
    }
};