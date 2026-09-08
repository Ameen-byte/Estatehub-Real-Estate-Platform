import './components.css'

function ActivityList({ activities }) {
  return <div>{activities.map((activity) => <div className="activity-item" key={activity.id}><span className="activity-mark">{activity.icon}</span><div className="activity-copy"><strong>{activity.title}</strong>{activity.detail}<span className="activity-time">{activity.time}</span></div></div>)}</div>
}

export default ActivityList
