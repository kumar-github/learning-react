import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentComponent from './CommentComponent';
import ApprovalCardComponent from './ApprovalCardComponent';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCardComponent>
                <div><h3>Warning!</h3></div>
                Are you sure?
            </ApprovalCardComponent>

            <ApprovalCardComponent>
                <CommentComponent
                    authorName={Faker.name.firstName()}
                    authorAvatar={Faker.image.avatar()}
                    commentText={Faker.lorem.sentence()}
                    commentedTime="Today at 4:45 PM"
                />
            </ApprovalCardComponent>
            <ApprovalCardComponent>
                <CommentComponent
                    authorName={Faker.name.firstName()}
                    authorAvatar={Faker.image.avatar()}
                    commentText={Faker.lorem.sentence()}
                    commentedTime="Yesterday at 9:00 AM"
                />
            </ApprovalCardComponent>
            <ApprovalCardComponent>
                <CommentComponent
                    authorName={Faker.name.firstName()}
                    authorAvatar={Faker.image.avatar()}
                    commentText={Faker.lorem.sentence()}
                    commentedTime="Yesterday at 6:30 PM"
                />
            </ApprovalCardComponent>
            <ApprovalCardComponent>
                <CommentComponent
                    authorName={Faker.name.firstName()}
                    authorAvatar={Faker.image.avatar()}
                    commentText={Faker.lorem.sentence()}
                    commentedTime="Today at 5:10 PM"
                />
            </ApprovalCardComponent>

        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));