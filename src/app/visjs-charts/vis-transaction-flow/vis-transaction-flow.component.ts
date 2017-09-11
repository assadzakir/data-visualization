import { Component , OnInit, OnDestroy, ViewChild, ElementRef,} from '@angular/core';
import { Network, DataSet, Node, Edge, IdType } from 'vis';

@Component({
  selector: 'app-vis-transaction-flow',
  templateUrl: './vis-transaction-flow.component.html',
  styleUrls: ['./vis-transaction-flow.component.css']
})
export class VisTransactionFlowComponent implements OnInit {

  @ViewChild('mynetwork') private mynetworkContainer: ElementRef;
  public nodes: Node;
  public edges: Edge;
  public network: Network;

  constructor() { }

  public ngOnInit(): void {
    const nodes = new DataSet([
  {id: 1, label: 'Rollout\nController\nMPG', color: '#16bb9b', font: {background: '#464646', color: '#fff'}, x: 0, y: 0, allowedToMoveX: true, allowedToMoveY: true, },
  {id: 2, label: 'SAIB\nStaindard\nWSP', color: '#e3811e', font: {background: '#464646', color: '#fff'}, x: 0, y: 0, allowedToMoveX: true, allowedToMoveY: true},
  {id: 3, label: 'Policty\nController\nFW', color: '#ec4c3e', font: {background: '#464646', color: '#fff'}, x: 0, y: 0, allowedToMoveX: true, allowedToMoveY: true},
  {id: 4, label: 'Customer\nProfile', color: '#2fafde', font: {background: '#464646', color: '#fff'}, x: 0, y: 0, allowedToMoveX: true, allowedToMoveY: true},
  {id: 5, label: 'New Node', color: '#468cc8', font: {background: '#464646', color: '#fff'}, x: 0, y: 0, allowedToMoveX: true, allowedToMoveY: true},
    ]);
    // create an array with edges
    const edges = new DataSet([
      {from: 1, to: 2, arrows: 'to', label: '6ms (3)',     font: {align: 'top'}, length: 200},
      {from: 1, to: 3, arrows: 'middle', label: '4ms (1)',     font: {align: 'top'}, length: 400},
      {from: 2, to: 4, arrows: 'to', label: '5ms (6)',     font: {align: 'top'}, length: 200},
      {from: 2, to: 1, arrows: 'middle', label: '5ms (4)',     font: {align: 'top'}, length: 200},
      {from: 3, to: 1, arrows: 'to', label: '4ms (5)',     font: {align: 'top'}, length: 200},
      {from: 4, to: 2, arrows: 'to', label: '10ms (5)',     font: {align: 'top'}, length: 200},
      {from: 4, to: 5, arrows: 'to' , label: '2ms (4)',     font: {align: 'top'}, length: 100},
      {from: 5, to: 1, arrows: 'to' , label: '3ms (1)',     font: {align: 'top'}, length: 100},
    ]);
    // create a network
    const container = this.mynetworkContainer.nativeElement;
    const data = {
      nodes: nodes,
      edges: edges
    };
    const options = {};
    const network = new Network(container, data, options);
  }
}
