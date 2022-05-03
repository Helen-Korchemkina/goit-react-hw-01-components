import Profile from './Profile/Profile';
import StatisticsList from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../datas/user.json';
import datas from '../datas/data.json';
import friends from '../datas/friends.json';
import items from '../datas/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsList datas={datas} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}
