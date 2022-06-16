class Tracer {
  constructor({ Xray } = {}) {
    this.Xray = Xray
  }
  createSegment({name, traceId, segmentId}){
    return new this.Xray.Segment(name, traceId, segmentId);
  }
  setSegment(segment){
    this.Xray.setSegment(segment);
  }
  getSegment(segment){
    return this.Xray.getSegment(segment);
  }
  createTrace() {
    console.log('Should create a trace');
  }
}

module.exports = Tracer; 