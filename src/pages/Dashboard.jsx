import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Card from "../components/Card"

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="cards">
          <Card title="Tasks" value="12" />
          <Card title="Completed" value="8" />
          <Card title="Pending" value="4" />
        </div>
      </div>
    </div>
  )
}
