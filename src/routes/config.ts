export interface IFMenuBase {
    key: string;
    title: string;
    icon?: string;
    component?: string;
    query?:string;
    requireAuth?: string;
    route?:string;

    login?: boolean;
}

export interface IFMenu extends IFMenuBase {
    subs?:IFMenu[];
}

const menus: {
    menus: IFMenu[];
    others: IFMenu[] | [];
    [index: string]: any;
} = {
    menus:[
        { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' }
    ],
    others: []
}
export default menus;