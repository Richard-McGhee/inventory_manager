import * as yup from 'yup'

const loginSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, "Name must be at least 4 characters long.")
        .required("Name is required."),
    password: yup
        .string()
        .min(8, "password must be at least 8 characters long.")
        .required("password is Required")
})

const registerSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, "Name must be at least 4 characters long.")
        .required("Name is required."),
    password: yup
        .string()
        .min(8, "password must be at least 8 characters long.")
        .required("Password is Required"),
    passConfirm: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    email: yup
        .string()
        .email()
        .min(4, "Email must be at least 4 characters long.")
        .required("Email is required"),
    companies: yup
        .string()
        .min(4, "Company must be at least 4 characters long.")
})

const itemSchema = yup.object().shape({
    name: yup
        .string()
        .min(4, "Name must be at least 4 characters long.")
        .required("Name is required."),
    quantity: yup
        .number()
        .min(1, "A minimum of 1 is required.")
        .required("Quantity is required."),
    price: yup
        .number()
        .min(0.01, "A price above 0 is required.")
        .required("Price is required."),
    category: yup
        .string()
        .min(3, "Category must be at least 3 characters long.")
        .required("Category is required."),
    sku: yup
        .number()
        .min(1, "SKU must be at least 1 character long")
        .required("SKU is required."),
    sold: yup
        .number()
        .required("Amount Sold is required."),
    onHand: yup
        .number()
        .required("Amount On Hand is required."),
    desc: yup
        .string()
        .min(4, "Description must be at least 4 characters.")
        .required("Description is required."),
    tags: yup
        .string()
        .min(3, "Tags must be at least 3 characters.")
        .required("Tags are required."),
    onFloor: yup
        .number()
        .required("Amount On Floor is required."),
    owner: yup
        .string()
        .min(4, "Owner's name must be at least 4 characters.")
        .required("Owner is required.")
})

const companySchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Company name must be at least 3 characters.")
        .required("Company name is required."),
    size: yup
        .string()
        .required("Company size is required."),
    owners: yup
        .string()
        .required("Company owner is required.")
})

export {
    loginSchema,
    registerSchema,
    itemSchema,
    companySchema
}