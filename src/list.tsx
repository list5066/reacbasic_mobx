import React from 'react';
import IPost from './ipost'
import listvalues from './data/listvalues'

const List = function() {
    const componentDidMount = function() {
        console.log('componentDidMount');
        
    }
    console.log('constructor');
    
    return (
    <>
        {listvalues.map(function(el: IPost) {
        return (
            <li key={el.objectId}>
                <span>
                    <a href={el.url}>{el.title}</a>
                </span>
                <span>{el.author}</span>
                <span>{el.commentsCount}</span>
                <span>{el.points}</span>
            </li>
        )
    })}
    </>
    )
}
export default List