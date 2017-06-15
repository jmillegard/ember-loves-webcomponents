export default function(){
  this.transition(
    this.fromRoute('screens.start'),
    this.toRoute('screens.login'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
