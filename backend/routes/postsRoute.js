import express from 'express'
import { getPosts, createPosts, updatePosts, deletePosts } from '../controllers/postsController.js'
const router =express.Router()

router.route('/').get(getPosts)
router.route('/').post(createPosts)
router.route('/:id').patch(updatePosts)
router.route('/:id').delete(deletePosts)


export default router;