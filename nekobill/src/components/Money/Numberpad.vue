<template>
    <div>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>×</button>
          <button class="ok">ok</button>
          <button class="zero">0</button>
          <button>.</button>
          <button>%</button>
          <button>÷</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearfix;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 -5px 6px -5px fade-out(#d47926, 0.6),
      inset 0 5px 6px -5px fade-out(#d47926, 0.6);
      background-color: white;
  }
  .buttons {
    @extend %clearfix;
    > button {
      width: 20%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      $bg: #f6ba72;
      &:nth-child(15),
      &:nth-child(19) {
        background: $bg;
      }
      &:nth-child(18),
      &:nth-child(14),
      &:nth-child(10) {
        background: lighten($bg, 4%);
      }
      &:nth-child(5),
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17) {
        background: lighten($bg, 4% * 2);
      }
      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12),
      &:nth-child(16) {
        background: lighten($bg, 4% * 3);
      }
      &:nth-child(3),
      &:nth-child(7),
      &:nth-child(11) {
        background: lighten($bg, 4% * 4);
      }
      &:nth-child(2),
      &:nth-child(6) {
        background: lighten($bg, 4% * 5);
      }
      &:nth-child(1) {
        background: lighten($bg, 4% * 6);
      }
    }
  }
}
</style>