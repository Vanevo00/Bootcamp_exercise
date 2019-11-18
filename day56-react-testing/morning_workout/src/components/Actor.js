import React from 'react';
import {Chart} from 'react-google-charts';

 const Actor = (props) => {
   
    let actorBasic = props.actorBasic ? props.actorBasic : "Loading.."
    let actorRatings = props.actorRatings ? props.actorRatings : "Loading.."
    let actorGenres = props.actorGenres ? props.actorGenres : "Loading.."

    return (
      <>
        <h1>{actorBasic.name}</h1>
        <p>Total movies: {actorBasic.movies_total}</p>
        <div style={{ display: 'flex', maxWidth: 2000 }}>
          <Chart
            width={1000}
            height={600}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={actorRatings}
            options={{
              title: 'Movie Ratings Over Time',
              chartArea: { width: '50%' },
              hAxis: {
                title: 'Average Rating',
                minValue: 0,
              },
              vAxis: {
                title: 'Year',
              },
            }}
            legendToggle
          />
          <Chart
            width={'400px'}
            height={'600px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={actorGenres}
            options={{
              title: 'Genres',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
      </>
    )
}

export default Actor