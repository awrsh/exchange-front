export const createObjects = (data: any) => {
    const newObjectsByKey = {};
    data.objects.forEach((item: any) => {
        item.options.forEach((option: any) => {
            const { id, title, field_key, field_type, type, is_form, process_time } = option;
            const newObject = { id, title, field_type, type, is_form, process_time };
            // @ts-ignore
            newObjectsByKey[field_key] = newObject;
        });
    });
    return newObjectsByKey
};



// Function to format the string
export function formatCardNumber(str:string) {
    // Split the string into groups of 4 characters
    const groups = str.match(/.{1,4}/g);
  
    // Join the groups with a hyphen
    const formattedString = groups?.join("-");
  
    return formattedString;
  }


  //  ایجاد ویرگول برای رقم ها
export const addCommas = (num:number | string) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  export const removeNonNumeric = (num:number | string) =>
    num.toString().replace(/[^0-9]/g, "");
  
  export const numberWithCommas = (x:number | string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };