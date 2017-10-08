// makeKnob() takes in from Form ID "create" and constructs a new knob.
function makeKnob() {

	// Info read in from <form>
	var info = getElementById("create");
	var newKnob = {m_title:info.elements[0].value, m_user:info.elements[1].value, m_time:info.elements[2].value};

	// Alert message shown to user about knob title
	var message = "Saved knob: " + newKnob.m_title;
	window.alert(message);

	// Create and append div w/ knob info to html body
	var div = document.createElement("div");
	div.innerHTML = newKnob.m_title;
	document.body.appendChild(div);
}
