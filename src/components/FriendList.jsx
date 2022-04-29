import PropTypes from 'prop-types';

const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => {
return (
 <div>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
 </div>       
    )
}

const FriendList = ({
    friends,
}) => {
    return (
 <ul className="friend-list" >
    {
   friends.map(
       friend => (
           <li className="item" key={friend.id}>
           <FriendListItem
    avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline}          
    />                   
   </li>
           ) 
)}  
</ul>   
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

FriendList.propTypes = {
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}

export default FriendList;