import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
  output?: boolean;
  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  get num() { return this.formGroup.controls.num; }
  get selectValue() { return this.formGroup.controls.selectValue; }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      num: [''],
      selectValue:['isPrime']
    });
  }

  onChangeInputNumber() {
    console.log(this.num.value)
    if (this.num) {
      if (this.num.value % 1 != 0) {
        var roundedNum = Math.round(this.num.value);
        console.log(roundedNum)
        this.formGroup.patchValue({ num: roundedNum })
      }else if (this.num.value < 0) {
        this.formGroup.patchValue({ num: 1 })
      }
      
    }
    this.onChangeSelect();
  }
  onChangeSelect() {
    console.log(this.selectValue.value)
    if (this.selectValue.value == "isPrime") {

      this.onSelectIsPrime();
    } else if (this.selectValue.value == "isFibonacci") {
      this.onSelectIsFibonacci();

    }

  }
  onSelectIsPrime() {
    var output = this.isPrime();
    this.output = output;
  }
  onSelectIsFibonacci() {
    var output = this.isFibonacci();
    this.output = output;
  }

  isFibonacci() {
   var a = 0;
            var b = 1;
            if (this.num.value==a || this.num.value==b) return true;
            var c = a+b;
            while(c<=this.num.value)
            {
                if(c == this.num.value) return true;
                a = b;
                b = c;
                c = a + b;
            }
            return false;
  }

  isPrime() {
    for(var i = 2; i < this.num.value; i++)
    if(this.num.value % i === 0) return false;
  return this.num.value > 1;
  }
}
