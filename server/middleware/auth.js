import jwt from 'jsonwebtoken';




const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'secret');

            req.userId = decodedData?.id; //optional chaining (if has)
        }else{
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub; //sub means a specific google id that differentiates from every other user
            //if populate the req.userId -> controller
        }

        next();
        //click the like button => auth middleware (cofirming or denying req.), next => like controller...

    } catch (error) {
        console.error(error)
    }
}

export default auth;