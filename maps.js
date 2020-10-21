// US Choropleth Map
Plotly.d3.csv('assests/data/state_data.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: unpack(rows, 'Abbreviation'),
        z: unpack(rows, 'Games_Owned'),
        text: 'games sold',
        colorscale: 'Electric',
        colorbar: {
            title: 'Number Games Sold'
        }, }];

    var layout = {
      title: 'Number of Steam Games Sold per US State',
      geo:{
        scope: 'usa',
        showlakes: true,
        lakecolor: '#e6ffff',
        }, };

    Plotly.newPlot("usmap", data, layout, {showLink: false});
});

// World Choropleth Map
Plotly.d3.csv('assests/data/steam_sales_by_country.csv', function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

  var data = [{
      type: 'choropleth',
      locationmode: 'country names',
      locations: unpack(rows, 'Countries'),
      z: unpack(rows, 'Games Owned'),
      text: 'games',
      colorscale: 'Electric',
      colorbar: {
          title: 'Number Games Sold'
      }, }];

  var layout = {
    title: 'Number of Steam Games Sold Worldwide',
    geo:{
      scope: 'worldwide',
      showocean: true,
      oceancolor: '#e6ffff',
      projection: {
        type: 'robinson'}
      }, };

  Plotly.newPlot("worldmap", data, layout, {showLink: false});
});

/* <script>
    text = statedf.apply(lambda row: f"{row['State']}<br>{row['Games_Owned']} games sold", axis=1),

    z = np.log10(df['Value']),

    colorbar=dict(
        tickvals = [4.0, 5.2, 6.1], 
        ticktext = ['10K', '100K', '1.4M']),

fig.update_layout(
    title_text='Number of Steam Games Sold per Country',
    geo=dict(
        showframe=False,
        showcoastlines=False,
),
    annotations = [dict(
        x=0.55,
        y=0.01,
        xref='paper',
        yref='paper',
        text='Grey countries have no data',
        showarrow = False
</script> */