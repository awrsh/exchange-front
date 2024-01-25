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