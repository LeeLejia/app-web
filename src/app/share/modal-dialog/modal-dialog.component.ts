import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Input, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MeditorService} from '../../services/meditor.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnDestroy {

  componentRef: ComponentRef<Component>;
  closeEvn: Function = null;
  outsideEvn: Function = null;
  temp = '';
  hidden = true
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  subscription: Subscription = null;
  constructor(private meditor: MeditorService, private resolver: ComponentFactoryResolver) {
    this.subscription = meditor.getObservable().subscribe(news => {
      if (news.id === 'modal-dialog') {
        this.closeEvn = news.body.closeEvn || null;
        if (news.body.temp) {
          this.container.createEmbeddedView(news.body.temp);
        }
        this.hidden = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // 创建自定义组件
  createComponent(component: Component) {
    this.container.clear();
    const factory: ComponentFactory<Component> =
      this.resolver.resolveComponentFactory(Component);
    this.componentRef = this.container.createComponent(factory);
  }

  // 关闭窗口
  close() {
    if (this.closeEvn) {
      this.closeEvn();
    }
    this.hidden = true;
  }
  // 点击了非内容区
  click_outside() {
    if (this.outsideEvn) {
      this.outsideEvn();
    }else {
      this.hidden = true;
    }
  }
}
