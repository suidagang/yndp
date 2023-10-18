//@ts-check

import dayjs from "dayjs"
/**
 * 获取当前月份
 * @date 2023-10-18
 * @returns {any}
 */
export const getCurrentMonth = () => {
  return Number(dayjs().month()) + 1;
}

/**
 * 获取上个月份
 * @date 2023-10-18
 * @returns {any}
 */
export const getPreMonth = () => {
  return Number(dayjs().month());
}