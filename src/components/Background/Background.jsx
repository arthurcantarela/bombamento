import React from "react";

const Background = props => {
  const bombas = `
		EA772&nbspA&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp8,2&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2012&nbsp&nbsp&nbsp&nbsp&nbspEM230&nbsp&nbsp&nbsp&nbsp&nbsp04&nbsp*&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp2&nbsp1S2012
		EM312&nbspA&nbsp&nbsp&nbsp04&nbspX&nbsp&nbsp&nbsp10,0&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2012&nbsp&nbsp&nbsp&nbsp&nbspF&nbsp128&nbspB&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp7,8&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2012
		F&nbsp129&nbspJ&nbsp&nbsp&nbsp02&nbsp+&nbsp&nbsp&nbsp&nbsp8,6&nbsp&nbsp30&nbsp&nbsp4&nbsp1S2012&nbsp&nbsp&nbsp&nbsp&nbspLA122&nbsp&nbsp&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp2&nbsp1S2012
		LA222&nbsp&nbsp&nbsp&nbsp&nbsp04&nbspX&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp2&nbsp1S2012&nbsp&nbsp&nbsp&nbsp&nbspMA111&nbsp4&nbsp&nbsp&nbsp06&nbsp+&nbsp&nbsp&nbsp&nbsp9,0&nbsp&nbsp90&nbsp&nbsp4&nbsp1S2012
		MA141&nbspF&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp8,6&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2012&nbsp&nbsp&nbsp&nbsp&nbspEA513&nbspU&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp7,0&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2012
		EA773&nbspC&nbsp&nbsp&nbsp02&nbsp+&nbsp&nbsp&nbsp&nbsp9,5&nbsp&nbsp30&nbsp&nbsp4&nbsp2S2012&nbsp&nbsp&nbsp&nbsp&nbspEM330&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp2S2012
		F&nbsp228&nbspH&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp7,1&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2012&nbsp&nbsp&nbsp&nbsp&nbspF&nbsp229&nbspE&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp30&nbsp&nbsp8&nbsp2S2012
		MA211&nbspW&nbsp&nbsp&nbsp06&nbsp+&nbsp&nbsp&nbsp&nbsp7,6&nbsp&nbsp90&nbsp&nbsp4&nbsp2S2012&nbsp&nbsp&nbsp&nbsp&nbspMA327&nbspD&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp6,7&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2012
		MC102&nbspK&nbsp&nbsp&nbsp06&nbsp+&nbsp&nbsp&nbsp10,0&nbsp&nbsp90&nbsp&nbsp4&nbsp2S2012&nbsp&nbsp&nbsp&nbsp&nbspEA611&nbspB&nbsp&nbsp&nbsp04&nbsp*&nbsp&nbsp&nbsp&nbsp5,0&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2013
		EA869&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2,2&nbsp&nbsp60&nbsp&nbsp5&nbsp1S2013&nbsp&nbsp&nbsp&nbsp&nbspEE103&nbspG&nbsp&nbsp&nbsp02&nbspX&nbsp&nbsp&nbsp&nbsp7,8&nbsp&nbsp30&nbsp&nbsp4&nbsp1S2013
		EE300&nbspU&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp1S2013&nbsp&nbsp&nbsp&nbsp&nbspF&nbsp315&nbspB&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp1S2013
		HZ291&nbspB&nbsp&nbsp&nbsp02&nbsp+&nbsp&nbsp&nbsp&nbsp8,8&nbsp&nbsp30&nbsp&nbsp4&nbsp1S2013&nbsp&nbsp&nbsp&nbsp&nbspMA311&nbspC&nbsp&nbsp&nbsp06&nbsp+&nbsp&nbsp&nbsp&nbsp5,5&nbsp&nbsp90&nbsp&nbsp4&nbsp1S2013
		ME323&nbspA&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp7,3&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2013&nbsp&nbsp&nbsp&nbsp&nbspMS211&nbspG&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp1S2013
		CE304&nbspB&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp30&nbsp&nbsp8&nbsp2S2013&nbsp&nbsp&nbsp&nbsp&nbspEA869&nbspU&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp6,2&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2013
		EE300&nbspA&nbsp&nbsp&nbsp04&nbsp*&nbsp&nbsp&nbsp&nbsp5,8&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2013&nbsp&nbsp&nbsp&nbsp&nbspEE400&nbspA&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp6,5&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2013
		EE521&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp2S2013&nbsp&nbsp&nbsp&nbsp&nbspEM330&nbspA&nbsp&nbsp&nbsp04&nbspX&nbsp&nbsp&nbsp&nbsp8,2&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2013
		F&nbsp229&nbspA&nbsp&nbsp&nbsp02&nbsp+&nbsp&nbsp&nbsp&nbsp7,0&nbsp&nbsp30&nbsp&nbsp4&nbsp2S2013&nbsp&nbsp&nbsp&nbsp&nbspF&nbsp315&nbspB&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2013
		QG100&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp2S2013&nbsp&nbsp&nbsp&nbsp&nbspCE304&nbspC&nbsp&nbsp&nbsp02&nbsp+&nbsp&nbsp&nbsp10,0&nbsp&nbsp30&nbsp&nbsp4&nbsp1S2014
		EA614&nbspA&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp6,0&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2014&nbsp&nbsp&nbsp&nbsp&nbspEA871&nbspR&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp1S2014
		EE301&nbspX&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp30&nbsp&nbsp8&nbsp1S2014&nbsp&nbsp&nbsp&nbsp&nbspEE410&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,8&nbsp&nbsp60&nbsp&nbsp5&nbsp1S2014
		EE521&nbspU&nbsp&nbsp&nbsp04&nbsp*&nbsp&nbsp&nbsp&nbsp7,6&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2014&nbsp&nbsp&nbsp&nbsp&nbspEE522&nbspK&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp30&nbsp&nbsp8&nbsp1S2014
		F&nbsp315&nbspB&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1,5&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2014&nbsp&nbsp&nbsp&nbsp&nbspMS211&nbspD&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,6&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2014
		EA044&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2,6&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2014&nbsp&nbsp&nbsp&nbsp&nbspEA075&nbspU&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3,7&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2014
		EA616&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2,5&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2014&nbsp&nbsp&nbsp&nbsp&nbspEA619&nbspR&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3,0&nbsp&nbsp30&nbsp&nbsp6&nbsp2S2014
		EA879&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2014&nbsp&nbsp&nbsp&nbsp&nbspEE881&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp2S2014
		ET520&nbspU&nbsp&nbsp&nbsp04&nbspX&nbsp&nbsp&nbsp&nbsp5,4&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2014&nbsp&nbsp&nbsp&nbsp&nbspEA616&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp1S2015
		EE410&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2015&nbsp&nbsp&nbsp&nbsp&nbspET620&nbspU&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1,7&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2015
		F&nbsp315&nbspD&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2,8&nbsp&nbsp60&nbsp&nbsp5&nbsp1S2015&nbsp&nbsp&nbsp&nbsp&nbspBE310&nbspC&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp30&nbsp&nbsp6&nbsp2S2015
		CE838&nbspC&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp30&nbsp&nbsp6&nbsp2S2015&nbsp&nbsp&nbsp&nbsp&nbspEA044&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp5,2&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2015
		EA616&nbspB&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1,7&nbsp&nbsp60&nbsp&nbsp5&nbsp2S2015&nbsp&nbsp&nbsp&nbsp&nbspEA879&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3,9&nbsp&nbsp60&nbsp&nbsp5&nbsp2S2015
		EE540&nbspU&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,3&nbsp&nbsp60&nbsp&nbsp5&nbsp2S2015&nbsp&nbsp&nbsp&nbsp&nbspEE881&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2015
		ET620&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,5&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2015&nbsp&nbsp&nbsp&nbsp&nbspBE310&nbspA&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp8,3&nbsp&nbsp30&nbsp&nbsp6&nbsp1S2016
		EA616&nbspU&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp5,6&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2016&nbsp&nbsp&nbsp&nbsp&nbspEA871&nbspQ&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2016
		EA876&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3,5&nbsp&nbsp60&nbsp&nbsp5&nbsp1S2016&nbsp&nbsp&nbsp&nbsp&nbspEE410&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3,1&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2016
		EE540&nbspA&nbsp&nbsp&nbsp04&nbsp*&nbsp&nbsp&nbsp&nbsp5,7&nbsp&nbsp60&nbsp&nbsp4&nbsp1S2016&nbsp&nbsp&nbsp&nbsp&nbspEE881&nbspU&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2,9&nbsp&nbsp60&nbsp&nbsp5&nbsp1S2016
		F&nbsp315&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2,1&nbsp&nbsp60&nbsp&nbsp5&nbsp1S2016&nbsp&nbsp&nbsp&nbsp&nbspEA619&nbspL&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp30&nbsp&nbsp6&nbsp2S2016
		EA871&nbspM&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1,3&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2016&nbsp&nbsp&nbsp&nbsp&nbspEA879&nbspU&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp6,8&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2016
		EE301&nbspC&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3,6&nbsp&nbsp30&nbsp&nbsp5&nbsp2S2016&nbsp&nbsp&nbsp&nbsp&nbspEE410&nbspU&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2016
		EE881&nbspB&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,3&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2016&nbsp&nbsp&nbsp&nbsp&nbspET620&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1,4&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2016
		CE838&nbspA&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp30&nbsp&nbsp5&nbsp1S2017&nbsp&nbsp&nbsp&nbsp&nbspEA721&nbspU&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2017
		EE410&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2017&nbsp&nbsp&nbsp&nbsp&nbspEG812&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,0&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2017
		F&nbsp315&nbspB&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0,4&nbsp&nbsp60&nbsp&nbsp6&nbsp1S2017&nbsp&nbsp&nbsp&nbsp&nbspCE838&nbspC&nbsp&nbsp&nbsp02&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1,6&nbsp&nbsp30&nbsp&nbsp5&nbsp2S2017
		EA075&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp7,1&nbsp&nbsp60&nbsp&nbsp6&nbsp2S2017&nbsp&nbsp&nbsp&nbsp&nbspEA721&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2,3&nbsp&nbsp60&nbsp&nbsp5&nbsp2S2017
		MS211&nbspZ&nbsp&nbsp&nbsp04&nbsp+&nbsp&nbsp&nbsp&nbsp6,9&nbsp&nbsp60&nbsp&nbsp4&nbsp2S2017&nbsp&nbsp&nbsp&nbsp&nbspEE532&nbspA&nbsp&nbsp&nbsp04&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp---&nbsp&nbsp60&nbsp&nbsp8&nbsp1S2018
	`;

  return (
    <div className="AppBkg">
      {bombas
        .match(
          /([A-Z]|&nbsp){2}\d{3}(&nbsp)([A-Z\d]|&nbsp)(&nbsp)*\d{2}(&nbsp)(&nbsp|[+*X!&?])(&nbsp)*((\d{1,2},\d)|---)(&nbsp)*\d{1,3}(&nbsp)*\d(&nbsp).{6}/g
        )
        .map((bomba, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: bomba }} />
        ))}
    </div>
  );
};

export default Background;
