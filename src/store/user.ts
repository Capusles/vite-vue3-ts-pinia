/*
 * @Descripttion: 
 * @version: 
 * @Author: coding
 * @Date: 2023-05-30 17:26:47
 * @LastEditors: 
 * @LastEditTime: 2023-05-30 17:27:05
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '张三'
        }
    },
    actions: {
        updateName(name) {
            this.name = name
        }
    }
})