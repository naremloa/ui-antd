import { isNil, isArray, isString } from '@/utils/lodash';
import dayjs, { utc } from '@/utils/dayjs';

dayjs.extend(utc);

export const formatDate = (date) => (isNil(date)
  ? '-'
  : dayjs(date).format('YYYY-MM-DD HH:mm:ss'));

export const getLatestDayTimeByNow = (num) => {
  const endTime = dayjs().endOf('day');
  const startTime = dayjs().startOf('day').subtract(num, 'day');
  return [
    startTime.format('YYYY-MM-DD HH:mm:ss'),
    endTime.format('YYYY-MM-DD HH:mm:ss'),
  ];
};

export const textAddEllipsis = (count, text) => {
  let textResult = '';
  if (typeof text === 'string' || text instanceof String) {
    textResult = (text.length > count) ? `${text.substring(0, count)}...` : text;
  }
  return textResult;
};

// 加上千分位符號
export const commaFormat = (value) => {
  let info = '0';
  value
    && (info = value
      .toString()
      .replace(
        /^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,
        (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&'),
      ));
  return info;
};
export const millisecond2utc = (time) => (time ? dayjs(time).format() : null);

/**
* 將 search-group 回傳的 date (毫秒) 資料轉成 UTC 格式
*
* input：
*    [1599148800000, 1599753599999]
* output：
*    {
*      startTime: 2020-09-04T00:00:00+08:0,
*      endTime: 2020-09-10T23:59:59+08:00,
*    }
* @method convertMillisecond2UtcObj
* @param {String} date re-search-group 組件回傳的 date (毫秒) 資料
*/
export const convertMillisecond2UtcObj = (date) => {
  if (!date || !isArray(date)) return {};
  const [startMillisecond, endMillisecond] = date;
  console.log('startMillisecond--', startMillisecond);
  console.log('endMillisecond--', endMillisecond);
  return {
    startTime: millisecond2utc(startMillisecond),
    endTime: millisecond2utc(endMillisecond),
  };
};

export const formatDateToUTC = (date) => (isNil(date)
  ? '-'
  : dayjs(date).utc(true).format()
);

/**
* 將 datetime-picker 組件 回傳的時間格式資料轉成 UTC 格式
*
* input：
*    ['1970-01-01 00:00:00', '1970-01-01 00:00:00']
* output：
*    {
*      startTime: 1970-01-01T00:00:00Z,
*      endTime: 1970-01-01T00:00:00Z,
*    }
* @method convertNormalTime2UtcObj
* @param {String} date datetime-picker 組件回傳的 date 陣列
*/
export const convertNormalTime2UtcObj = (date) => {
  if (!date || !isArray(date)) return {};
  const [startTime, endTime] = date;
  console.log('startTime--', startTime);
  console.log('endTime--', endTime);
  return {
    startTime: formatDateToUTC(startTime),
    endTime: formatDateToUTC(endTime),
  };
};
/**
* 取當前時區
*
* @method getTimezone
* @param {Boolean} [isLocal=true] 是否回傳 client 當地時區
* @return {Number} time zone offset number
*/
export const getTimezone = (isLocal = true) => {
  const clientTimeZone = -(new Date().getTimezoneOffset() / 60);
  return isLocal ? clientTimeZone : 8;
};

/**
 *  file to base64
 *  @param {file} 檔案
 *  @return {base64}
 */
export const file2Base64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

// 驗證 attachment id 格式
export const attachmentIdValidate = (id) => !!id && isString(id) && id.length === 19;

/**
* 給 blob 並自動下載
*
* @method downloadFileByBlob
* @param {BlobObject} blob物件
* @param {String}} fileName 下載後的檔名
* @return {Boolean} undefined
*/
export const downloadFileByBlob = (blob, fileName) => {
  const blobUrl = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = blobUrl;
  fileName = fileName || `attachment_${dayjs().format('YYYYMMDDHHmmss')}`;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
* 給 id 並自動下載
*
* @method downloadFileByAttachmentId
* @param {String} attachmentId
* @param {String}} fileName 下載後的檔名
* @return {Boolean} undefined
*/
// export const downloadFileByAttachmentId = async (attachmentId, fileName) => {
//   const validate = attachmentIdValidate(attachmentId);
//   if (!validate) {
//     this.$notify({ type: 'error', message: '下載錯誤' });
//     return;
//   }
//   const { blob } = await getAttachment(attachmentId);
//   fileName = fileName || `attachment_${dayjs().format('YYYYMMDDHHmmss')}`;
//   downloadFileByBlob(blob, fileName);
// };
