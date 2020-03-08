import { useState } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdownContainer from '../CartDropdown/CartDropdown.container';
import CartIcon from './CartIcon.component';

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Query query={GET_ITEM_COUNT}>
      {({ data: { itemCount } }) => (
        <div>
          <CartIcon itemCount={itemCount} handleDropdown={handleDropdown} />
          {isDropdownOpen && <CartDropdownContainer />}
        </div>
      )}
    </Query>
  );
};

export default CartIconContainer;
