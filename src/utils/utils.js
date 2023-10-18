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


/**
 * 描述
 * @date 2023-10-18
 * @param {String} time
 * @returns {String}
 */
export const distanceCurrentMonth = (time) => {
  // 获取传过来的时间的年份和月份
  let oldMonth = Number(dayjs(time).month()) + 1;
  let oldYear = Number(dayjs(time).year());
  // 获取当前年月
  let currentMonth = Number(dayjs().month()) + 1;
  let currentYear = Number(dayjs().year());

  let result = (currentYear - oldYear) * 12 + (currentMonth - oldMonth) + ""; //距今月数
  return result;
}