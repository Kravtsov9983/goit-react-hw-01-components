import StatisticsMenu from "../Statistics/StatisticsMenu"

export default function Statistics({ data }) {
    const elements = data.map(({id, label, percentage}) => 
        <StatisticsMenu key={id} label={label} percentage={ percentage} />
        )
   {
        return (
            <section className="statistics">
                <h2 className="title">Upload stats</h2>
                <ul className="stat-list">{ elements }</ul >
        </section>
        
    )
  }
}
