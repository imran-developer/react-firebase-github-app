import React from 'react';
import {Card, CardBody} from 'reactstrap';

const UserCard = ({user}) => {
    return(
        <Card className="text-center mb-4 clearfix">
            <img src={user.avatar_url} className="img-thumbnail" alt="" />
            <CardBody>
                <div className="text-primary" >{user.name}</div>
                <div className="text-primary" >{user.location}</div>
                <div className="text-primary" >{user.bio}</div>
                <div className="text-info" >Available for hire: {user.hireable ? "Yes" : "Nope"}</div>
                <div className="text-danger" >Followers: {user.followers}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard;