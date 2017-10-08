class knob {
  constructor (knobName, personName, knobTime)
  {
    this.knobName = knobName;
    this.personName = personName;
    if (typeof knobTime === "undefined")
    {
      this.knobTime = 0;
    }
    else
    {
      this.knobTime = knobTime;
    }
  }

  function getKnobName()
  {
    return this.knobName;
  }
  function getPersonName()
  {
    return this.personName;
  }
  function getKnobTime()
  {
    return this.knobTime;
  }
  function setKnobName(newName)
  {
    this.knobName = newName;
  }
  function setPersonName(newPerson)
  {
    this.personName = newPerson;
  }
  function setKnobTime(newTime)
  {
    this.knobTime = newTime;
  }

}
