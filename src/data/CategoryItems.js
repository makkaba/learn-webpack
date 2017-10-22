import React, {Component} from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

//db처럼 항상 변화하는 값은 아니지만 언제든지 변화할 수 있는 값은 이렇게 변수로 다뤄줄 수 있다.
//CategoryPage.js 에서 변수처럼 사용.
export const CategoryItems = (
        <div>
            <ListItem button>
              <ListItemText primary="문법" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="다이나믹 프로그래밍" />
            </ListItem>
        </div>
);