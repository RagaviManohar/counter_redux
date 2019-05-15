import Counter from './components/Counter';
import CounterRedux from './components/CounterRedux';
import ParentComponent from './containers/ParentComponent';
import ModifyStoreByObj from './containers/ModifyStoreByObj';
import DisplayCounterOperations from './components/DisplayCounterOperations';

export default [
    {
        path: "/parent_child",
        component: ParentComponent,
    },
    {
        path: "/counter",
        component: Counter,
    },
    {
        path: "/counter_redux",
        component: CounterRedux,
    },
    {
        path: "/add_remove_counter",
        component: DisplayCounterOperations,
    },
    {
        path: "/modify_store",
        component: ModifyStoreByObj,
    },
]
