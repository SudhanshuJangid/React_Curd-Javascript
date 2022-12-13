import * as yup from "yup";

export const Schehma = yup.object().shape({
    EmplName: yup.string().required("Required").min(4),
    FatherN: yup.string().required("Required"),
    Bod: yup.string().required("Required"),
    Blood: yup.string().required("Required").oneOf(["O-", "B+", "A-", "A+"], "plz select one of the options.."),
    Gender: yup.string().required("Required").oneOf(["Male", "Female"], "plz select one of the options.."),
    Status: yup.string().required("Required").oneOf(["Team1", "Team2", "Team3"], "plz select one of the options.."),
    Passport: yup.number().required("Required").integer(),
    Adhar: yup.number().required("Required").integer(),
    Moblie: yup.number().required("Required").integer(),
    Paddress: yup.string().required("Required"),
    Email: yup.string().required("Required").email('plz write your e-mail correctly..'),
    Pmaddress: yup.string().required("Required"),
    photo: yup.string().required("Required"),
    sign: yup.string().required("Required"),
    Role: yup.string().required("Required").oneOf(["Intern", "Employe", "Manager"], "plz select one of the options.."),
    Baccount: yup.number().required("Required").integer(),
    AccountH: yup.string().required("Required"),
    Panno: yup.number().required("Required").integer(),
    Bankadd: yup.string().required("Required"),
    // email: yup.string().required("Required").email(),
    // channel: yup.string().required("Required"),
    // age: yup.number().required("Required").positive().integer(),
    // password: yup.string().required("Required").min(5, "Your password must be longer than 5 characters.")
    //     .max(25)
    //     .matches(/^(?=.{6,})/, "Must Contain 6 Characters")
    //     .matches(
    //         /^(?=.*[a-z])(?=.*[A-Z])/,
    //         "Must Contain One Uppercase, One Lowercase"
    //     )
    //     .matches(
    //         /^(?=.*[!@#\$%\^&\*])/,
    //         "Must Contain One Special Case Character"
    //     )
    //     .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),

    // confirmpassword: yup.string().required("Required").oneOf([yup.ref("password"), null], "Passwords must match")
});