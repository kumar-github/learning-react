import React from 'react';
import ReactDOM from 'react-dom';
import CommentComponent from './CommentComponent';
import Faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">

            <CommentComponent
                authorName={Faker.name.firstName()}
                authorAvatar={Faker.image.avatar()}
                commentText={Faker.lorem.sentence()}
                commentedTime="Today at 4:45 PM"
            />
            <CommentComponent
                authorName={Faker.name.firstName()}
                authorAvatar={Faker.image.avatar()}
                commentText={Faker.lorem.sentence()}
                commentedTime="Today at 10:00 AM"
            />
            <CommentComponent
                authorName={Faker.name.firstName()}
                authorAvatar={Faker.image.avatar()}
                commentText={Faker.lorem.sentence()}
                commentedTime="Yesterday at 6:10 PM"
            />
            <CommentComponent
                authorName={Faker.name.firstName()}
                authorAvatar={Faker.image.avatar()}
                commentText={Faker.lorem.sentence()}
                commentedTime="Today at 9:30 PM"
            />
            <CommentComponent
                authorName={Faker.name.firstName()}
                authorAvatar={Faker.image.avatar()}
                commentText={Faker.lorem.sentence()}
                commentedTime="Yesterday at 8.30 AM"
            />

        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));