import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>
                        Are you sure you want to do this?
                    </h4>
                    <h3>
                        Warning!
                    </h3>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    timeAgo="Today at 4:45pm" 
                    comment="good one!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00am" 
                    comment="just soso"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="yesterday at 4:00" 
                    comment="nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Bob" 
                    timeAgo = "today at 2:00" 
                    comment="i like the writing"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))