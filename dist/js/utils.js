"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var fs = require('fs');
function fromDir(startPath, filter, callback) {
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }
    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter, callback); //recurse
        }
        else if (filter.test(filename))
            callback(filename);
    }
    ;
}
exports.fromDir = fromDir;
;
function getSubStringBetweenTwoStrings(inputText, startStr, endStr) {
    if (inputText.indexOf(startStr) && inputText.indexOf(endStr)) {
        var startIndex = inputText.indexOf(startStr) + startStr.length;
        var endIndex = inputText.indexOf(endStr);
        return inputText.substring(startIndex, endIndex);
    }
    else {
        throw new Error('Start or End strings are not contained in text');
    }
}
exports.getSubStringBetweenTwoStrings = getSubStringBetweenTwoStrings;
;
// fromDir('../LiteScript', /\.html$/, function (filename) {
//     console.log('-- found: ', filename);
// }); 

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFdkIsaUJBQXdCLFNBQWlCLEVBQUUsTUFBYyxFQUFFLFFBQWtCO0lBRXpFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUVELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNsRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUFBLENBQUM7QUFDTixDQUFDO0FBaEJELDBCQWdCQztBQUFBLENBQUM7QUFFRix1Q0FBOEMsU0FBZ0IsRUFBRSxRQUFlLEVBQUUsTUFBYTtJQUMxRixFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMvRCxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDdEUsQ0FBQztBQUNMLENBQUM7QUFSRCxzRUFRQztBQUFBLENBQUM7QUFFRiw0REFBNEQ7QUFDNUQsMkNBQTJDO0FBQzNDLE1BQU0iLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcm9tRGlyKHN0YXJ0UGF0aDogU3RyaW5nLCBmaWx0ZXI6IFJlZ0V4cCwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcblxyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHN0YXJ0UGF0aCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRpciBcIiwgc3RhcnRQYXRoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpbGVzID0gZnMucmVhZGRpclN5bmMoc3RhcnRQYXRoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgZmlsZW5hbWUgPSBwYXRoLmpvaW4oc3RhcnRQYXRoLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgdmFyIHN0YXQgPSBmcy5sc3RhdFN5bmMoZmlsZW5hbWUpO1xyXG4gICAgICAgIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgICAgICAgZnJvbURpcihmaWxlbmFtZSwgZmlsdGVyLCBjYWxsYmFjayk7IC8vcmVjdXJzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmaWx0ZXIudGVzdChmaWxlbmFtZSkpIGNhbGxiYWNrKGZpbGVuYW1lKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ViU3RyaW5nQmV0d2VlblR3b1N0cmluZ3MoaW5wdXRUZXh0OnN0cmluZywgc3RhcnRTdHI6c3RyaW5nLCBlbmRTdHI6c3RyaW5nKTpzdHJpbmcge1xyXG4gICAgaWYoaW5wdXRUZXh0LmluZGV4T2Yoc3RhcnRTdHIpICYmIGlucHV0VGV4dC5pbmRleE9mKGVuZFN0cikpIHtcclxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IGlucHV0VGV4dC5pbmRleE9mKHN0YXJ0U3RyKSArIHN0YXJ0U3RyLmxlbmd0aDtcclxuICAgICAgICBsZXQgZW5kSW5kZXggPSBpbnB1dFRleHQuaW5kZXhPZihlbmRTdHIpO1xyXG4gICAgICAgIHJldHVybiBpbnB1dFRleHQuc3Vic3RyaW5nKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdGFydCBvciBFbmQgc3RyaW5ncyBhcmUgbm90IGNvbnRhaW5lZCBpbiB0ZXh0Jyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBmcm9tRGlyKCcuLi9MaXRlU2NyaXB0JywgL1xcLmh0bWwkLywgZnVuY3Rpb24gKGZpbGVuYW1lKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnLS0gZm91bmQ6ICcsIGZpbGVuYW1lKTtcclxuLy8gfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==