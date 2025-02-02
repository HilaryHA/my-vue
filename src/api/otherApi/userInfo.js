/**
 *  userInfo用户信息模块接口列表
 */
import base from '../base';         // 导入接口域名列表
import axios from '@/utils/http';   // 导入http中创建的axios实例
// import qs from 'qs';             // 根据需求是否导入qs模块
import { showTip, showNotification } from './common';

const userInfo = {
    /**
     * 登录
     * @param {Object} params 
     * JSON.stringify函数可用可不用
     */
    async login(params) {
        // let userInfo = await axios.post(`${base.user}/login`, qs.stringify(params));
        let userInfo = await axios.post(`${base.user}/login`, JSON.stringify(params));
        showTip(userInfo, 'success');
        return userInfo;
    },

    /**
     * 获取用户信息
     */
    userIndex() {
        return axios.get(`${base.user}`);
    },

    /**
     * 获取单个用户信息
     * @param {String} id 
     */
    getUserById(id) {
        return axios.get(`${base.user}/${id}`);
    },

    /**
     * 退出登录
     */
    async logout() {
        let user = await axios.get(`${base.user}/logout`);
        showNotification(user, 'success');
        return user;
    },

    /**
     * 创建用户信息
     * @param {Object} params 
     */
    async add(params) {
        let user = await axios.post(`${base.user}`, params);
        showNotification(user, 'success');
        return user;
    },

    /**
     * 修改用户信息
     * @param {Object} params 
     */
    async edit(params) {
        let user = await axios.put(`${base.user}/${params.id}`, params);
        showNotification(user, 'success');
        return user;
    },

    /**
     * 删除用户信息
     * @param {String} id 
     */
    async del(id) {
        let user = await axios.delete(`${base.user}/${id}`);
        showNotification(user, 'success');
        return user;
    }
}

export default userInfo;
