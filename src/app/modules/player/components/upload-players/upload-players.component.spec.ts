import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPlayersComponent } from './upload-players.component';

describe('UploadPlayersComponent', () => {
  let component: UploadPlayersComponent;
  let fixture: ComponentFixture<UploadPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
