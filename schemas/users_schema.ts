
type UserProps = {
    userId: string,
    name: string,
    surname: string,
    userType: string,
    country: string,
    userRank: string,
    userLanguage: string
}

export const userSchema = ({
    userId, name, surname, userType, country, userRank, userLanguage
}: UserProps) => {
    return {
        _userId: userId,
        _name: name,
        _surname: surname,
        _userType: userType,
        _country: country,
        _userRank: userRank,
        _userLanguage: userLanguage

    }
}