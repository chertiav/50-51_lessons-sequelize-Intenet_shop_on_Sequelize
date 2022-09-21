import {Router} from 'express';
//===================================
import brandRouter from './brandRouters';
import customerRouter from './customerRouters';
import customer_phoneRouter from './customer_phoneRouters';
import item_categoryRouter from './item_categoryRouters';
import item_modelRouter from './item_modelRouters';
import item_typeRouter from './item_typeRouters';
import orderRouter from './orderRouters';
import storeRouter from './storeRouters';
import itemRouter from './itemRouters';

const router = new Router();

router.use('/brands', brandRouter);
router.use('/phones', customer_phoneRouter);
router.use('/customers', customerRouter);
router.use('/categories', item_categoryRouter);
router.use('/models', item_modelRouter);
router.use('/types', item_typeRouter);
router.use('/orders', orderRouter);
router.use('/stores', storeRouter);
router.use('/items', itemRouter)

export default router;
