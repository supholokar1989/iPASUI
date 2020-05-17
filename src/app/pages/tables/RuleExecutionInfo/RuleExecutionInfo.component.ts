import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';



/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'ruleExecutionInfo-table',
  styleUrls: ['RuleExecutionInfo.component.scss'],
  templateUrl: 'RuleExecutionInfo.component.html',
})
export class RuleExecutionInfoComponent implements OnInit, OnDestroy {

  
  settings = {
    actions:false,
    hideSubHeader: true,
    columns: {
      RuleExecutionErrorId: {
        title: 'ID',
        type: 'number',
      },
      RuleErrorDescription: {
        title: 'Rule Description',
        type: 'string',
      },
      RuleType: {
        title: 'Error Type',
        type: 'html',
        rowClassFunction: (RuleType) => {
          debugger;
          if (RuleType === 1) {
            return 'highlightOwner';
          } else if (RuleType === 2) {
            return 'highlightOwner2';
          }
          return '';
        }
      },
    },
  };
  
  
  source: LocalDataSource = new LocalDataSource();

  ngOnInit(): void {
    this.source.load(this.data);
  }

    ngOnDestroy() {
    }

    data = [
      {
        RuleExecutionErrorId: 1,
        RuleErrorDescription: 'Leanne Graham',
        RuleType: 1
      },
      {
        RuleExecutionErrorId: 2,
        RuleErrorDescription: 'Ervin Howell',
        RuleType: 2
      },
      {
        RuleExecutionErrorId: 3,
        RuleErrorDescription: 'Clementine Bauch',
        RuleType: 3
      }
   ];
  
}
  
