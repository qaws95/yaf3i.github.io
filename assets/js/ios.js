var agent = navigator.userAgent;
var ios =  agent.match(/.*; CPU (?:iPhone )?OS ([0-9_]*) like Mac OS X[;)]/);
ios = ios == null ? '10.0' : ios[1].replace(/_/g,'.');
document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">');
if (parseFloat(ios) >= 7.0) {
  document.write('<link rel="stylesheet" type="text/css" href="../../assets/css/ios78.css"');
} else {
  document.write('<link rel="stylesheet" type="text/css" href="../../assets/css/legacy.css"');
}
if (navigator.userAgent.search(/Cydia/) != -1)
  document.write('<link rel="stylesheet" type="text/css" href="../../assets/css/style.css"');
