/**
 * @file
 *
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */

import express from 'express';
import multer from 'multer';
import createHomeowner from '../../controllers/homeowner/create';
import deleteHomeowner from '../../controllers/homeowner/delete';
import retrieveAll from '../../controllers/homeowner/retrieveAll';
import retrieveById from '../../controllers/homeowner/retrieveById';
import retrieveByParam from '../../controllers/homeowner/retrieveByParam';
import updateHomeowner from '../../controllers/homeowner/update';

const upload = multer({ inMemory: true });
const homeownerRouter = express.Router();

/**
 * @swagger
 * /homeowner:
 *   post:
 *     tags:
 *       - homeowner
 *     name: create a new homeowner
 *     description: Takes the input as xml
 *     summary: create a new homeowner
 *     produces:
 *       - application/json
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: file
 *         in: formData
 *         description: Sample XML file
 *         required: true
 *         type: file
 *     responses:
 *      201:
 *        description: Homeowner added successfully
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: New Homeowner added successfully
 *      500:
 *        description: Internal server
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Specific message of what happened
 */
homeownerRouter.post('/', upload.single('file'), createHomeowner);

/**
 * @swagger
 * /homeowner/id/{id}:
 *   get:
 *     tags:
 *       - homeowner
 *     name: Get homeownerbyid
 *     description: Takes id as input
 *     summary: Get homeownerbyid
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the homeowner
 *         required: true
 *         type: number
 *     responses:
 *      200:
 *        description: Homeowner details if present
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Homeowner details if present
 *            data:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  id:
 *                    type: integer
 *                  age:
 *                    type: integer
 *                  profession:
 *                    type: string
 *                  address:
 *                    type: object
 *                    properties:
 *                      lat:
 *                        type: integer
 *                      lng:
 *                        type: integer
 *      500:
 *        description: Internal server
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Specific message of what happened
 *      404:
 *        description: Homeowner not found
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Homeowner not found
 */
homeownerRouter.get('/id/:id', retrieveById);

/**
 * @swagger
 * /homeowner/{param}/{value}:
 *   get:
 *     tags:
 *       - homeowner
 *     name: Get homeowner by param
 *     description: Takes any param and value as input
 *     summary: Get homeowner by param
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: param
 *         in: path
 *         description: Name of the parameter
 *         required: true
 *         type: string
 *       - name: value
 *         in: path
 *         description: Value for the paramater
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        description: Homeowner details if present
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Homeowner details if present
 *            data:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  id:
 *                    type: integer
 *                  age:
 *                    type: integer
 *                  profession:
 *                    type: string
 *                  address:
 *                    type: object
 *                    properties:
 *                      lat:
 *                        type: integer
 *                      lng:
 *                        type: integer
 *      500:
 *        description: Internal server
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Specific message of what happened
 *      404:
 *        description: Homeowner not found
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Homeowner not found
 */
homeownerRouter.get('/:param/:value', retrieveByParam);

/**
 * @swagger
 * /homeowner/all:
 *   get:
 *     tags:
 *       - homeowner
 *     name: Get all homeowners
 *     description: Get all homeowners
 *     summary: Get all homeowners
 *     produces:
 *       - application/json
 *     responses:
 *      200:
 *        description: Homeowner details if present
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Homeowner details if present
 *            data:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  id:
 *                    type: integer
 *                  age:
 *                    type: integer
 *                  profession:
 *                    type: string
 *                  address:
 *                    type: object
 *                    properties:
 *                      lat:
 *                        type: integer
 *                      lng:
 *                        type: integer
 *      500:
 *        description: Internal server
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Specific message of what happened
 *      404:
 *        description: Homeowner not found
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Homeowner not found
 */
homeownerRouter.get('/all', retrieveAll);

/**
 * @swagger
 * /homeowner/{id}:
 *   put:
 *     tags:
 *       - homeowner
 *     name: Update the homeowner
 *     description: Update the homeowner
 *     summary: Update the homeowner
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id of the homeowner
 *         required: true
 *         type: number
 *       - name: homeowner object
 *         description: homeowner object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             age:
 *               type: integer
 *             profession:
 *               type: string
 *             address:
 *               type: object
 *               properties:
 *                 lat:
 *                   type: integer
 *                 lng:
 *                   type: integer
 *     responses:
 *      204:
 *        description: Homeowner details updated
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Homeowner details updated
 *      500:
 *        description: Internal server
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Specific message of what happened
 */
homeownerRouter.put('/:id', updateHomeowner);

/**
 * @swagger
 * /homeowner:
 *   delete:
 *     tags:
 *       - homeowner
 *     name: delete the homeowner
 *     description: delete the homeowner
 *     summary: delete the homeowner
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: List of homeowner ids
 *         description:
 *         in: body
 *         required: true
 *         type: array
 *         items:
 *           type: integer
 *         uniqueItems: true
 *     responses:
 *      200:
 *        description: Homeowner details deleted
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Homeowner details deleted
 *      500:
 *        description: Internal server
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              description: Specific message of what happened
 */
homeownerRouter.delete('/', deleteHomeowner);

export default homeownerRouter;
