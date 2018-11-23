function parse_and_plot(data){
  let xmlDoc = $.parseXML(data);
  let $xml = $(xmlDoc);
  let name = $xml.find("trk > name").text();

  let latlongs = [];
  let i = 0;
  let pts = $xml.find("trk > trkseg > trkpt");
  let skip = Math.floor(pts.length / 100);
  let markers = [];
  console.log(skip);
  console.log($xml);
  for (let pt of pts){
    console.log("I made it")
    let coords = [parseFloat(pt.getAttribute("lat")), parseFloat(pt.getAttribute("lon"))];
    latlongs.push(coords);
    let rate = pt.getElementsByTagName('extensions')[0].getElementsByTagName('*', 'hr')[0].innerHTML;
    if(i % skip ===0){
      let marker = L.marker(coord, {icon: icon});
      marker.bindTooltip(rate + " bpm");
      marker.push(marker);
    }
    i += 1;
  }


}
