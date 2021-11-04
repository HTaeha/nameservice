package keeper

import (
	"github.com/coreators/nameservice/x/nameservice/types"
)

var _ types.QueryServer = Keeper{}
