$(function () {
    var $country = $('.country');
    var $stateInput = $('.state');
    var $stateSelect = $("<select {% if form.state.errors %}class='test'{% endif %}></select>").insertBefore($stateInput).change(function() {
        $stateInput.val($stateSelect.val());
    });
    $country.change(function() {
        $stateSelect.empty().addClass('loading');
        $.getJSON('/states', {'country':$(this).val()}, function(states) {
            $stateSelect.removeClass('loading');
            for(i in states) {
                $stateSelect.append('<option value="'+states[i]+'">'+states[i]+'</option>');
            }
            $stateSelect.val($stateInput.val()).trigger('change');
        });
    }).trigger('change');
});
