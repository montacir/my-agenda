import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import * as _ from 'underscore';


const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    type: {type: String, trim: true},
    logo: String,
    createdAt: {type: Date, default: Date.now},
    actif: {type: Boolean, default: true}
});

UserSchema.index({email: 'text'});
UserSchema.index({email: 1}, {unique: true});

class UserClass {

    get lean() {
        return _.pick(this, 'name', 'email', 'logo','_id');
    }

    // generating a hash
    set generateHash(password) {
        this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    };

    // checking if password is valid
    validPassword(password) {
        console.log('validPassword', password, this.password, bcrypt.compareSync(password, this.password));
        return bcrypt.compareSync(password, this.password);
    };

}

UserSchema.loadClass(UserClass);
export const User = mongoose.model('User', UserSchema);
