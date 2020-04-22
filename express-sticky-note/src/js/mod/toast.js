///require('less/toast.less');
var $ =require('../libs/jquery-2.0.3.min.js' )
function toast(msg, time){
  this.msg = msg;
  this.dismissTime = time||1000;  //ms
  this.createToast();
  this.showToast();
}
toast.prototype = {
  createToast: function(){
    var tpl = '<div class="toast">'+this.msg+'</div>';///默认情况下toast是隐藏的
    this.$toast = $(tpl);
    $('body').append(this.$toast);
  },
  showToast: function(){
    var self = this;////因为在后面的this.$toast和setTimeout中this已经改变了。为了继续找到toast元素，所以用了self
    this.$toast.fadeIn(300, function(){////用300ms的时间去出现toast
      setTimeout(function(){
         self.$toast.fadeOut(300,function(){///300ms后 toast消失
           self.$toast.remove();///删除toast  
         });
      }, self.dismissTime);
    });

  }
};

function Toast(msg,time){///单独调用的时候，会New一个toast
  return new toast(msg, time);
}

module.exports.Toast = Toast;